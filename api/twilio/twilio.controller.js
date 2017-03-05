import { config } from '../config';
import Traveler from '../../database/models/travelers';
import _ from 'lodash';
export const Twilio = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

// admin hits this api to send text to users
export const sendText = (req, res, next) => {
	if (_.isEmpty(req.body)) {
		return res.status(404).end();
	}

	Twilio.sendMessage({
	    to: req.body.to,
	    from: config.twilio.adminPhone,
	    body: req.body.message,
	}, (err, result) => {
		if (err) next(err);
		return res.status(200).json(result);
	});

};

// webhook from twilio will hit this route
export const respondToText = (req, res, next) => {
	const msgBody = req.body.Body;
	const travelerPhone = req.body.From.slice(2, req.body.From.length); // remove +1

	if (req.body.AccountSid !== config.twilio.accountSid) {
		return res.status(403).end();
	}

	if (msgBody.toLowerCase() !== 'ok') { // TODO:  handle 'sos' responses
		return res.status(400).end();
	}

	Traveler.findOne({
    where: {
			phone: travelerPhone
    }
	})
	.then(traveler => {
    if (!traveler) {
			return res.status(404).end();
    }
    traveler.status = 'cleared';
    return traveler.save();
	})
	.then(traveler => {
		const xml = `
		<?xml version="1.0" encoding="UTF-8"?>
		<Response>
		    <Message>Welcome home, ${traveler.name}! You have been marked as cleared. Thanks for using BorderBuddy.</Message>
		</Response>`;
		res.status(200).send(xml);
	})
	.catch(next);
};


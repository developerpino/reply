const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const reply = {};
const likes = {};
app.use(history());
app.use(express.json());
app.use(express.static('dist'));
app.get("/api/board/reply", (req, res) => {
    if (typeof req.query.idx === 'object') {
        return res.status(200).json(req.query.idx.reduce((acc, it) => ({ ...acc, [it]: reply[it] || [] }), {}));
    } else {
        return res.status(200).json(reply);
    }
});
app.post("/api/board/reply/:idx", (req, res) => {
    if (typeof req.params.idx !== 'string') {
        return res.status(400).json({err: 'Need to parameter: idx'});
    }
    if (typeof req.body.content !== 'string' || req.body.content.length === 0) {
        return res.status(400).json({err: 'Empty reply content'});
    }
    if (reply[req.params.idx]) {
        reply[req.params.idx].push(req.body.content)
    } else {
        reply[req.params.idx] = [req.body.content];
    }
    return res.status(201).json({});
});
app.get("/api/board/likes", (req, res) => {
    if (typeof req.query.idx === 'object') {
        return res.status(200).json(req.query.idx.reduce((acc, it) => ({ ...acc, [it]: likes[it] || [] }), {}));
    } else {
        return res.status(200).json(likes);
    }
});
app.post("/api/board/likes/:idx", (req, res) => {
    if (typeof req.params.idx !== 'string') {
        return res.status(400).json({err: 'Need to parameter: idx'});
    }
    if (typeof req.body.user !== 'string' || req.body.user.length === 0) {
        return res.status(400).json({err: 'Empty reply user'});
    }
    if (likes[req.params.idx]) {
        if (likes[req.params.idx].includes(req.body.user)) {
            return res.status(204).json({});
        }
        likes[req.params.idx].push(req.body.user);
    } else {
        likes[req.params.idx] = [req.body.user];
    }
    return res.status(201).json({});
});
app.delete("/api/board/likes/:idx", (req, res) => {
    if (typeof req.params.idx !== 'string') {
        return res.status(400).json({err: 'Need to parameter: idx'});
    }
    if (typeof req.query.user !== 'string' || req.query.user.length === 0) {
        return res.status(400).json({err: 'Empty reply user'});
    }
    let indexOfUser = likes[req.params.idx].indexOf(req.query.user);
    if (indexOfUser>-1) {
        likes[req.params.idx].splice(indexOfUser, 1);
        return res.status(202).json({});
    }
    return res.status(204).json({});
});
app.use(function (req,res,next){
	res.status(404).send('Unable to find the requested resource!');
});
app.listen(3000, function() {
    console.log("Started server of minsung")
});
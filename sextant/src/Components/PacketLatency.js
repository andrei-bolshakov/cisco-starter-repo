import React, { Component } from 'react';
import Moment from 'moment';
import moment from 'moment';

let dat = new Date ();
let now = Date.parse (dat);
let mil = dat.getMilliseconds();
now = now + mil;
let lat = 0;
let tim = 0;
let mes = "Waiting Connection";

let socket = new WebSocket("ws://localhost:55455");
socket.onopen = function() {
    mes = "Connection Established";
    }
socket.onmessage = function(event) {
    dat = new Date()
    now = Date.parse (dat);
    mil = dat.getMilliseconds();
    now = now + mil;
    tim = Number(event.data);
    lat = now - Number(event.data);
}

class PacketLatency extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: moment().format()
        }
    }

    componentDidMount() {
        this.intervalIdx = setInterval(() => this.setState ({
            currentTime: moment().format('YYYY-MM-DD,hh:mm:ss.SSS')
        }), 1);
    }

    componentWillUnmount() {
        clearInterval (this.intervalIdx);
    }


    render() {
        const { currentTime } = this.state;
        return (
            <>
                <div>{mes}</div>
                <div className="header_clock">{currentTime}</div>
                <div>Current time is  : {now}</div>
                <div>Packet time is   : {tim}</div>
                <div>Latency is       : {lat} milliseconds</div>
            </>
        );
    }
}

export default PacketLatency;
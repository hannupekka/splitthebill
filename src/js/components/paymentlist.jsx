/** @jsx React.DOM */
var React = require('react');
var Payment = require('./payment.jsx');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;
var _map = require('lodash.map');

module.exports = React.createClass({
    render: function() {
        var payments = _map(this.props.payments, function(payment, i) {
            var personsPayments = payment.to.map(function(p,j) {
                return (
                    <Payment key={j} to={p.to} amount={p.amount} />
                );
            });

            return (
                <div key={i}>
                    <div>who pays: {payment.name}</div>
                    {personsPayments}
                </div>
            );
        });

        return (
            <div id='paymentList' className='col-xs-4'>
                <b>Total: </b> <FormattedNumber value={this.props.total} style="currency" currency="EUR" /> <br />
                <b>Share: </b> <FormattedNumber value={this.props.share} style="currency" currency="EUR" /> <br />
                {payments}
            </div>
        );
    }
});
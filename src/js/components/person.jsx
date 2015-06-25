/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    handleChange: function(field, event) {
        this.props.onPersonChange(field, event.target.value, this.props.idx);
    },
    render: function() {
        var buttonClass = this.props.personCount === 1 ? 'hidden' : 'col-xs-1';
        return (
            <div className='personList__person clearfix'>
                <div className='person__name col-xs-4'>
                    <input type='text' className='form-control input-lg' placeholder={this.props.name} onChange={this.handleChange.bind(this, 'name')} autoFocus />
                </div>
                <div className='person__paid col-xs-6'>
                    <div className='input-group'>
                        <div className="input-group-addon">€</div>
                        <input type='text' className='form-control input-lg' placeholder={this.props.paid} onChange={this.handleChange.bind(this, 'paid')} />
                    </div>
                </div>
                <div className={buttonClass}>
                    <div className='btn btn-primary btn-sm btn-remove' onClick={this.props.onDelete} tabIndex='-1'><i className='fa fa-minus'></i></div>
                </div>
            </div>
        );
    }
});

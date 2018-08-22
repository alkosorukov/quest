import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, DropdownMenu, DropdownToggle, Form, Input, Button } from 'reactstrap'
import { loupe } from '../../Common/svg-icons'

import './style.css'

export default class Search extends PureComponent {

    static propTypes = {
        className: PropTypes.string
    }

    static defaultProps = {
        className: ''
    }

    state = {
        dropdownOpen: false
    }

    toggle = () => {
        const { dropdownOpen } = this.state
        this.setState({
            dropdownOpen: !dropdownOpen
        });
    }

    render() {
        const { dropdownOpen } = this.state
        const { className } = this.props
        return (
            <Dropdown isOpen={dropdownOpen} toggle={this.toggle} className={`find ${className}`}>
                <DropdownToggle
                    tag="span"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                >
                    <div className="find__search-ico">{loupe('#4a4a4a')}</div>
                </DropdownToggle>
                <DropdownMenu right >
                    <Form className="search-form">
                        <Input type="text" />
                        <Button type="submit">Искать</Button>
                    </Form>
                </DropdownMenu>
            </Dropdown>
        )
    }
}
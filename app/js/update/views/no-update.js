import React from 'react'
import { ShellScreen, Type } from '@blockstack/ui'
import PropTypes from 'prop-types'

class NoUpdate extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.finish(), 3500)
  }

  render() {
    const { finish, ...rest } = this.props

    const props = {
      title: {
        children: 'You are up-to-date.',
        variant: 'h2'
      },
      content: {
        grow: 1,
        children: (
          <React.Fragment>
            <Type.p>
              You are running the latest version of the Blockstack browser,
              there's nothing to update! You will be redirected shortly.
            </Type.p>
          </React.Fragment>
        )
      },
      actions: {
        items: [
          {
            label: <React.Fragment>Continue</React.Fragment>,
            primary: true,
            onClick: () => finish(),
            loading: true,
            placeholder: 'Redirecting...',
            disabled: true
          }
        ]
      }
    }
    return <ShellScreen {...rest} {...props} />
  }
}

NoUpdate.propTypes = {
  finish: PropTypes.func.isRequired,
  app: PropTypes.object
}

export default NoUpdate

import React, { Component } from 'react'
import { Settings } from './settings.component'
import { routes } from './data'
import { StateContext } from '../../../core/utils/context'

export class SettingsContainer extends Component {
  constructor (props) {
    super(props)

    this.data = routes
    this.navigationKey = 'SettingsContainter'
  }

  onItemSelect (index) {
    const selectedItem = this.data[index]

    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: selectedItem.route
    })
  }

  render () {
    return (
      <StateContext.Consumer>
        {
          (context) => (
            <Settings
              data={this.data}
              onItemSelect={(i) => this.onItemSelect(i)}
            />
          )
        }
      </StateContext.Consumer>
    )
  }
}

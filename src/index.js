import React from "react"
import ReactDOM from "react-dom"
import moment from 'moment'
import {avatarSquare, avatarPortrait, lorem} from "./samplemedia"
import {placeholderImage} from "./samplemedia"
import iconExample from "!svg-inline-loader!./heart_lg.svg"
import 'moment/min/locales'
import {TreeBrowser, IconPlusLine, View, Checkbox} from "@instructure/ui"

const render = (el) => { ReactDOM.render(el, document.getElementById('app')) }
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showRootCollection: true
    }
  }

  handleSwitch = () => {
    this.setState({ showRootCollection: !this.state.showRootCollection })
  }

  renderNode = () => {
    return (
      <TreeBrowser.Node itemIcon={<IconPlusLine />}>
        More
      </TreeBrowser.Node>
    )
  }

  render () {
    return (
      <>
        <View display="block" margin="none none medium">
          <Checkbox
            label="showRootCollection"
            variant="toggle"
            size="medium"
            checked={this.state.showRootCollection}
            onChange={this.handleSwitch}
          />
        </View>

        <TreeBrowser
          collections={{
            1: {
              id: 1,
              name: "Assignments",
              collections: [2,3],
              items: [3, 5],
              descriptor: "Class Assignments",
              renderAfterItems: this.renderNode()
            },
            2: { id: 2, name: "English Assignments", collections: [4], items: [] },
            3: { id: 3, name: "Math Assignments", collections: [5], items: [1,2] },
            4: { id: 4, name: "Reading Assignments", collections: [], items: [4] },
            5: { id: 5, name: "Advanced Math Assignments", items: [5]}
          }}
          items={{
            1: { id: 1, name: "Addition Worksheet" },
            2: { id: 2, name: "Subtraction Worksheet" },
            3: { id: 3, name: "General Questions" },
            4: { id: 4, name: "Vogon Poetry" },
            5: { id: 5, name: "Bistromath", descriptor: "Explain the Bistromathic Drive" }
          }}
          defaultExpanded={[1, 3]}
          rootId={1}
          showRootCollection={this.state.showRootCollection}
        />
      </>
    )
  }
}

render(<Example/>)
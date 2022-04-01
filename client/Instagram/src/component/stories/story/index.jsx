import { Component } from 'react'
import Zuck from 'zuck.js'
import './story.scss'

export default class Story extends Component {
  constructor (props) {
    super(props)
    this.storiesElement = null
    this.storiesApi = null
    this.state = {
      stories: [
        Zuck.buildTimelineItem(
          'ramon',
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg',
          'Ramon',
          'https://ramon.codes',
          1575221470504,
          [
            [
              'ramon-1',
              'photo',
              3,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
              '',
              false,
              false,
              1575221470504
            ],
            [
              'ramon-2',
              'video',
              0,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg',
              '',
              false,
              false,
              1575221470504
            ],
            [
              'ramon-3',
              'photo',
              3,
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png',
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png',
              'https://ramon.codes',
              'Visit my Portfolio',
              false,
              1575221470504
            ]
          ]
        )
      ]
    }
  }

  stories = () => new Zuck(this.storiesElement, {
    skin: 'snapgram',
    avatars: true,
    list: false,
    openEffect: true,
    cubeEffect: false,
    autoFullScreen: false,
    backButton: true,
    backNative: false,
    previousTap: true,
    localStorage: true,
    reactive: true,
    callbacks: {
      onDataUpdate: function (currentState, callback) {
        this.setState(
          state => {
            state.stories = currentState

            return state
          },
          () => {
            callback()
          }
        )
      }.bind(this)
    },
    stories: this.state.stories
  })

  componentDidMount () {
    this.stories()
  }

  render () {
    const timelineItems = []

    this.state.stories.forEach((story, storyId) => {
      const storyItems = []

      story.items.forEach(storyItem => {
        storyItems.push(
          <li
            key={storyItem.id}
            data-id={storyItem.id}
            data-time={storyItem.time}
            className={storyItem.seen ? 'seen' : ''}
          >
            <a
              href={storyItem.src}
              data-type={storyItem.type}
              data-length={storyItem.length}
              data-link={storyItem.link}
              data-linkText={storyItem.linkText}
            >
              <img src={storyItem.preview} />
            </a>
          </li>
        )
      })

      const arrayFunc = story.seen ? 'push' : 'unshift'
      timelineItems[arrayFunc](
        <div
          className={story.seen ? 'story seen' : 'story'}
          key={storyId}
          data-id={storyId}
          data-last-updated={story.lastUpdated}
          data-photo={story.photo}
        >
          <a className="item-link" href={story.link}>
            <span className="item-preview">
              <img src={story.photo} />
            </span>
            <span className="info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
              <strong className="name" itemProp="name">
                {story.name}
              </strong>
              <span className="time">{story.lastUpdated}</span>
            </span>
          </a>

          <ul className="items">{storyItems}</ul>
        </div>
      )
    })

    return (
      <div>
        <div ref={node => (this.storiesElement = node)} id="stories-react" className="storiesWrapper">
          {timelineItems}
        </div>
      </div>
    )
  }
}

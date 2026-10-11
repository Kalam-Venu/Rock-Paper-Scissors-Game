
import {Component} from 'react'
import {
  Bgcontainer,
  Uppercard,
  Mainheading,
  Scorecard,
  Scoreheading,
  Scorepara,
  Gamecarddiv,
  Choicebutton,
  Choiceimage,
  Rulesbutton,
  Rulesdiv,
  Rulesimg,
  Closebtn,
  Gameresultcard,
  Eachchoice,
  Heading,
  Eachimage,
  Resultcard,
  Playagnbtn,
  Gameresulttotalcard,
} from '../stledcomponents'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

class Gamecard extends Component {
  state = {
    isgameover: false,
    gameresult: '',
    score: 0,
    selectedchoiceimg: '',
    rndimg: '',
  }

  playagain = () => {
    this.setState({
      isgameover: false,
      gameresult: '',
      selectedchoiceimg: '',
      rndimg: '',
    })
  }

  onClickChoice = selecteditem => {
    const {list} = this.props
    const rnditem = list[Math.floor(Math.random() * list.length)]

    const userId = selecteditem.id
    const opponentId = rnditem.id

    let result = ''
    let scoreChange = 0

    if (userId === opponentId) {
      result = 'IT IS DRAW'
    } else if (
      (userId === 'ROCK' && opponentId === 'SCISSORS') ||
      (userId === 'SCISSORS' && opponentId === 'PAPER') ||
      (userId === 'PAPER' && opponentId === 'ROCK')
    ) {
      result = 'YOU WON'
      scoreChange = 1
    } else {
      result = 'YOU LOSE'
      scoreChange = -1
    }

    this.setState(prevState => ({
      isgameover: true,
      gameresult: result,
      selectedchoiceimg: selecteditem.imageUrl,
      rndimg: rnditem.imageUrl,
      score: prevState.score + scoreChange,
    }))
  }

  render() {
    const {
      isgameover,
      gameresult,
      score,
      selectedchoiceimg,
      rndimg,
    } = this.state

    const {list} = this.props

    return (
      <Bgcontainer>
        <Uppercard>
          <Mainheading>ROCK PAPER SCISSORS</Mainheading>
          <Scorecard>
            <Scoreheading>Score</Scoreheading>
            <Scorepara>{score}</Scorepara>
          </Scorecard>
        </Uppercard>

        {!isgameover ? (
          <Gamecarddiv>
            {list.map(each => (
              <Choicebutton
                key={each.id}
                onClick={() => this.onClickChoice(each)}
                data-testid={`${each.id.toLowerCase()}Button`}
              >
                <Choiceimage src={each.imageUrl} alt={each.id} />
              </Choicebutton>
            ))}
          </Gamecarddiv>
        ) : (
          <Gameresulttotalcard>
            <Gameresultcard>
              <Eachchoice>
                <Heading>YOU</Heading>
                <Eachimage
                  src={selectedchoiceimg}
                  alt="your choice"
                />
              </Eachchoice>

              <Eachchoice>
                <Heading>OPPONENT</Heading>
                <Eachimage
                  src={rndimg}
                  alt="opponent choice"
                />
              </Eachchoice>
            </Gameresultcard>

            <Resultcard>
              <Heading>{gameresult}</Heading>
              <Playagnbtn onClick={this.playagain}>
                PLAY AGAIN
              </Playagnbtn>
            </Resultcard>
          </Gameresulttotalcard>
        )}

        <Popup modal trigger={<Rulesbutton>RULES</Rulesbutton>}>
          {close => (
            <Rulesdiv>
              <Closebtn onClick={close} aria-label="Close rules">
                <RiCloseLine />
              </Closebtn>
              <Rulesimg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </Rulesdiv>
          )}
        </Popup>
      </Bgcontainer>
    )
  }
}

export default Gamecard

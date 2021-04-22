import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers/helper";
class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
      },
      {
        side: "tails",
        imgSrc:
          "https://images-na.ssl-images-amazon.com/images/I/51beaKg%2BzRL._AC_.jpg",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
  }

  flipCoin = () => {
    const newCoin = choice(this.props.coins);

    this.setState((st) => {
      return {
        currentCoin: newCoin,
        nFlips: st.nFlips + 1,
        // check if newcoin equals to heads if it does add 1 if its not add 0
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
    console.log(this.state.currentCoin);
  };

  handleClick = () => {
    this.flipCoin();
  };
  render() {
    return (
      <div className="CoinContainer">
        <h1>Let's flip a coin</h1>
        <button onClick={this.handleClick}>Flip</button>
        {/* if currentcoin is not null render coin component */}
        {this.state.currentCoin && (
          <Coin info={this.state.currentCoin} img={this.props.coins.imgSrc} />
        )}
        <p>
          Out of {this.state.nFlips} flips there have been {this.state.nHeads}{" "}
          head flips and {this.state.nTails} tails flips
        </p>
      </div>
    );
  }
}

export default CoinContainer;

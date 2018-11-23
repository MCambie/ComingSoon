import React, {Component} from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices:[20,30,50],
    positions:['Balcony','Medium','Star'],
    desc:[
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ornare lorem non tincidunt. Suspendisse potenti. Sed non pharetra ipsum, in commodo orci.',
      'Aliquam a faucibus ligula, ac congue lorem. In sit amet arcu tincidunt, aliquet ex ac, vehicula arcu. Integer vitae maximus metus, vitae maximus velit. ',
      'Praesent nulla eros, faucibus vel lacus ut, gravida laoreet ante. Integer venenatis ante scelerisque, eleifend risus ut, tincidunt nisi.faucibus vel.'
    ],
    linkto:['https://sales/b', 'https://sales/m', 'https://sales/s'],
    delay:[500,0,500]
  }

  showBoxes = () => (
    this.state.prices.map((box,i)=>(
      <Zoom delay={this.state.delay[i]} key={i}>
          <div className='pricing_item'>
            <div className='pricing_inner_wrapper'>
              <div className='pricing_title'>
                <span>€{this.state.prices[i]}</span>
                <span>{this.state.positions[i]}</span>
              </div>
              <div className='pricing_description'>
                {this.state.desc[i]}
              </div>
              <div className='pricing_buttons'>
                  <MyButton
                    text='Purchase Tickets'
                    bck='#ffa800'
                    color='#ffffff'
                    link={this.state.linkto[i]}
                  />
              </div>
            </div>
          </div>
      </Zoom>
    ))
  )
  render () {
      return (
          <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
              <h2>Pricing</h2>
              <div className='pricing_wrapper'>
              {this.showBoxes()}
              </div>
            </div>
          </div>
      );
  }
}

export default Pricing;

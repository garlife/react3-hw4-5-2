import React from 'react';
import './style.css';
import Render from './Render';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scooters: [
        {
          name: 'Xiaomi Mi',
          charge: '30%',
          price: '300',
          src: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/566/476/681/191/33/100027507996b0.jpg',
          marked: false,
        },
        {
          name: 'Kugoo S3 Jilong',
          charge: '99%',
          price: '450',
          src: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/566/476/681/191/33/100027507996b0.jpg',
          marked: false,
        },
        {
          name: 'SuperMax',
          charge: '61%',
          price: '600',
          src: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-13/566/476/681/191/33/100027507996b0.jpg',
          marked: false,
        },
      ],
    };
  }

  // handler() {
  //   console.log(this.state.scooters)
  //   setState( () => {})
  // }

  render() {
    return (
      <>
        <h1>Электросамокаты в аренду</h1>
        <div>
          {console.log(this.state.scooters)}

          <Render scooters={this.state.scooters} 
          // onMark={this.handler()} 
          />
        </div>
      </>
    );
  }
}

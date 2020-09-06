import React, { Component } from 'react';
import './live-stream.styles.scss';
import ReactPlayer from 'react-player';
// import userImg from '../../../assets/userImg.jpg';
import LiveStreamFooter from './LiveStreamFooter/live-strem-footer.component';

export class LiveStream extends Component {
  render() {
    return (
      <div className="live-stream_container bg-dark pt-3">
        <h2 className="live-stream_header text-white pb-2 pl-2">
          Live Stream
        </h2>
        <div className="d-flex live-and-chat">
          <div
            className="live-stream bg-success w-75"
            style={{ height: '80vh' }}
          >
            <ReactPlayer
              style={{ width: '100%' }}
              url="https://www.youtube.com/watch?v=btmjDyff6E8"
              playing={true}
              loop={true}
            />
          </div>
          <div
            className="chat-bar bg-danger w-25"
            style={{ height: '80vh' }}
          >
            <div className="instruction_container">
              <h2 className="instruction_header mb-4">
                Lorem Ipsum: when and when not to use it
              </h2>
              <p className="instruction">
                Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Laboriosam quis omnis
                animi ducimus mollitia! Quibusdam, rem
                magni. Ab qui quibusdam ipsum nemo
                necessitatibus dignissimos repellendus
                cumque iste aliquid porro suscipit aut
                similique voluptas, ipsa obcaecati hic et
                nostrum reiciendis quaerat iure vel omnis
                blanditiis labore? Officiis perferendis,
                quasi consectetur ab veritatis magnam
                asperiores iste libero commodi minima.
                Cumque, inventore! Excepturi, ea est
                inventore laborum a optio nesciunt iure
                voluptates itaque repellendus ut error
                officiis, similique illo omnis reprehenderit
                odit natus quod earum quidem hic? Quisquam
                amet ipsum ad placeat ratione quos nemo in,
                ullam, id maiores pariatur eum optio quidem.
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Illo molestias nulla
                corporis fugiat animi neque deleniti odio
                iste vero, nisi repudiandae omnis repellat
                laboriosam modi vitae vel eligendi dicta,
                culpa, commodi a eos! Ex recusandae quas
                deserunt labore, quod est reprehenderit
                assumenda, aliquid dolorem natus voluptatem
                possimus, non culpa repellendus. Obcaecati,
                cum, veritatis numquam nisi dignissimos id
                nulla eos quae, omnis blanditiis asperiores.
                Id error in explicabo nostrum temporibus,
                nesciunt at? Voluptatum architecto sunt
                assumenda voluptas, minus eos ad provident
                error sapiente corrupti animi, tempore
                fugit, illum nostrum voluptatem iure fugiat
                impedit quae adipisci quaerat veritatis.
                Sed, accusamus deserunt. Ipsam animi nisi
                dolorum magni autem? Beatae accusantium esse
                laborum ab enim voluptates quis fuga facere
                inventore dolore, vitae eos labore aliquam
                commodi maiores omnis, suscipit consequatur.
                Minima nihil, laudantium error ducimus enim
                aut eius? Sunt maiores rerum, aut, dolores
                vel, veniam ad soluta similique ab
                blanditiis exercitationem quo saepe ullam.
              </p>
            </div>
            <div className="chats_container">
              <div className="chats-header bg-white">
                <h5 className="top-chat p-3 m-0">
                  Top chat{' '}
                  <i className="fa fa-caret-down ml-1"></i>{' '}
                </h5>
              </div>
              <div className="chats">
                <div className="chat m-0 d-flex p-3">
                  <div className="user-img_container mr-2 mx-1">
                    {/* <img src={userImg} alt="" className="user-img"/> */}
                  </div>
                  <p className="chat m-0">
                    <span className="username mr-1">
                      username
                    </span>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, ut.
                  </p>
                </div>
                <div className="chat m-0 d-flex p-3">
                  <div className="user-img_container mr-2">
                    {/* <img src={userImg} alt="" className="user-img"/> */}
                  </div>
                  <p className="chat m-0">
                    <span className="username">
                      username
                    </span>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, ut.
                  </p>
                </div>
                <div className="chat m-0 d-flex p-3">
                  <div className="user-img_container mr-2">
                    {/* <img src={userImg} alt="" className="user-img"/> */}
                  </div>
                  <p className="chat m-0">
                    <span className="username">
                      username
                    </span>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, ut.
                  </p>
                </div>
                <div className="chat m-0 d-flex p-3">
                  <div className="user-img_container mr-2">
                    {/* <img src={userImg} alt="" className="user-img"/> */}
                  </div>
                  <p className="chat m-0">
                    <span className="username">
                      username
                    </span>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, ut.
                  </p>
                </div>
                <div className="chat m-0 d-flex p-3">
                  <div className="user-img_container mr-2">
                    {/* <img src={userImg} alt="" className="user-img"/> */}
                  </div>
                  <p className="chat m-0">
                    <span className="username">
                      username
                    </span>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, ut.
                  </p>
                </div>
                <div className="chat m-0 d-flex p-3">
                  <div className="user-img_container mr-2">
                    {/* <img src={userImg} alt="" className="user-img"/> */}
                  </div>
                  <p className="chat m-0">
                    <span className="username">
                      Harshit
                    </span>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, ut.
                  </p>
                </div>
                <div className="chat m-0 d-flex p-3">
                  <div className="user-img_container mr-2">
                    {/* <img src={userImg} alt="" className="user-img"/> */}
                  </div>
                  <p className="chat m-0">
                    <span className="username">
                      username
                    </span>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Harum, ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <LiveStreamFooter /> */}
      </div>
    );
  }
}

export default LiveStream;

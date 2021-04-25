import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFooter } from '@ionic/react';
import './Home.css';
import MenuContainer from "../components/Menu/MenuContainer";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div>
              <h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consequuntur dolorem fuga non optio quis quos similique voluptas. Culpa doloremque dolores expedita molestiae officia porro provident quis repellat?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consequuntur dolorem fuga non optio quis quos similique voluptas. Culpa doloremque dolores expedita molestiae officia porro provident quis repellat?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consequuntur dolorem fuga non optio quis quos similique voluptas. Culpa doloremque dolores expedita molestiae officia porro provident quis repellat?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consequuntur dolorem fuga non optio quis quos similique voluptas. Culpa doloremque dolores expedita molestiae officia porro provident quis repellat?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consequuntur dolorem fuga non optio quis quos similique voluptas. Culpa doloremque dolores expedita molestiae officia porro provident quis repellat?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consequuntur dolorem fuga non optio quis quos similique voluptas. Culpa doloremque dolores expedita molestiae officia porro provident quis repellat?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consequuntur dolorem fuga non optio quis quos similique voluptas. Culpa doloremque dolores expedita molestiae officia porro provident quis repellat?

              </h3>
          </div>
          <MenuContainer />
      </IonContent>

    </IonPage>
  );
};

export default Home;

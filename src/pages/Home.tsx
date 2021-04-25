import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFooter } from '@ionic/react';
import './Home.css';
import MenuContainer from "../components/Menu/MenuContainer";
import React from "react";
import UserInfoBank from "../components/UserInfoBank/UserInfoBank";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="dark">
          <UserInfoBank/>
          <MenuContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
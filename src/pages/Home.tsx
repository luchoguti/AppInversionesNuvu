import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFooter } from '@ionic/react';
import './Home.css';
import MenuContainer from "../components/Menu/MenuContainer";
import React from "react";
import UserInfoBank from "../components/UserInfoBank/UserInfoBank";
import Aim from "../components/Aim/Aim";
import BriefCase from "../components/BriefCase/BriefCase";

const Home: React.FC = () => {
  return (
    <IonPage>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
        </style>
      <IonContent color="dark">
          <UserInfoBank/>
          <Aim/>
          <BriefCase/>
      </IonContent>
      <IonFooter className="ion-no-border">
          <MenuContainer/>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
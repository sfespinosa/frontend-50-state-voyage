import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardColumns } from 'reactstrap';
import EstablishmentCard from './EstablishmentCard'
import classnames from 'classnames';
import FriendsFeed from './FriendsFeed';

export default function DrawerBody({toggleModal, establishmentCards, remove, viewDetails, currentState, show}){

    const [activeTab, setActiveTab] = React.useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    if (show === false && activeTab !== '1') {
        setActiveTab('1')
    }

    const renderEstablishmentCards = () => {
        return establishmentCards.map(card => {
            return <EstablishmentCard {...card} key={card.id} remove={remove} viewDetails={viewDetails}/>
        })
    }

    return(
        <div className='drawer-body'>
            <Button id='add-establishment-btn' className='btn-round' size='lg' color='info' onClick={toggleModal}>Add an Establishment to your Collection for this State</Button>
        <Nav tabs>
        <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
            >
                Your Saved Establishments
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
            >
            Friends Feed
            </NavLink>
        </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <CardColumns>
                {renderEstablishmentCards()}
                </CardColumns>
            </TabPane>
        <TabPane tabId="2">
            <CardColumns>
                <FriendsFeed currentState={currentState}/>
            </CardColumns>
        </TabPane>
        </TabContent>
    </div>
    )
}
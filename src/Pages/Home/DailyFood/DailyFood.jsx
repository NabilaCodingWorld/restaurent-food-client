import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuFood from './MenuFood';
import './DailyFood.css'


const DailyFood = () => {
    const categories = ['breakfast', 'lunch', 'scanks', 'dinner'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/dailyFood')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);
   

    const breakfast = foods.filter(item => item.category === 'breakfast');
    const lunch = foods.filter(item => item.category === 'lunch');
    const snacks = foods.filter(item => item.category === 'scanks');
    const dinner = foods.filter(item => item.category === 'dinner');



    return (
        <div className='mx-auto max-w-7xl'>

            <div> <br /> <br />
                <div className='divider md:mx-40 md:text-2xl text-[#E9B64B] mb-2'>Food Menu</div>
                <p className='md:text-4xl mb-10 text-center'>Most Popular Item</p>
            </div>
            <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <center>
                    <TabList>

                        <div>
                            <Tab>  Breakfast</Tab>
                            <Tab>Lunch</Tab>
                            <Tab>Snacks</Tab>
                            <Tab>Dinner</Tab>
                        </div>

                    </TabList>
                </center>
                <br /> <br />
                <TabPanel>
                    <MenuFood items={breakfast}></MenuFood>
                </TabPanel>
                <TabPanel>
                    <MenuFood items={lunch}></MenuFood>
                </TabPanel>
                <TabPanel>
                    <MenuFood items={snacks}></MenuFood>
                </TabPanel>
                <TabPanel>
                    <MenuFood items={dinner}></MenuFood>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DailyFood;

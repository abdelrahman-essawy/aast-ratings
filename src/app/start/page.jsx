import { Cards } from '../components/Cards/Cards'
import Search from '../components/Search/page'
import Section from '../utilities/StyledComponents/Section'
import React from 'react'
import database from '../firebase'
import { collection, getDocs } from "firebase/firestore";

const page = () => {

    const getData = async () => {

        const querySnapshot = await getDocs(collection(database, "lecturers"));
        querySnapshot.forEach((lecturer) => {
            const { id, name, courses, ratings } = lecturer.data();
            console.log(ratings);
        });
    }
    getData()

    return (
        <Section>
            <div className='container py-8'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-3xl font-bold text-gray-200'>Computer Science</h1>
                        <p className='text-gray-200'>Rate your lectures, improve your education. Join now!</p>
                    </div>
                    <div className='w-full'>
                        <Search />
                    </div>
                    <div>
                        <Cards />
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default page
import React, { Component } from 'react';
import StoryList from '../components/StoryList'
import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import Error from 'next/error'

class Index extends Component {
    state = {
        data : []
    }

    static async getInitialProps( {req, res, query} ) {
        let stories;
        let page;

        try {
            page = Number(query.page) || 1;
            const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
            stories = await res.json()
        } catch (error) {
            console.log(error);
            stories = []   
        }
        return{page, stories}
    }

    render() {
        const {page, stories} = this.props
        if(stories.length === 0) {
            return <Error />
        } 
        return ( 
            <Layout title='hackernews' description='news in technology'>
                <StoryList stories={stories} />

                <footer>
                    <Link href={`/?page=${page + 1}`}>
                        <a>next page ({page + 1})</a>
                    </Link>
                </footer>
            </Layout>
         );
    }
}
 
export default Index;
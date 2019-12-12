import React from 'react';

const AppHeader = ({liked, allPosts, stared}) => {
    return (
        <div className="app-header d-flex">
            
            <h2>posts: {allPosts}, liked: {liked}, important: {stared}</h2>

        </div>
    )
}

export default AppHeader;
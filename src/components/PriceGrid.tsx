

const PriceGrid = () => {
    return(
        <div className='card'>
            <div className='section'>
                <div className='title'>Join our community</div>
                <div className='sub-title'>30-day, hassle-free money back guarantee</div>
                <div className='description'>Gain access to our full library of tutorials along with expert code reviews.<br/>Perfect for any developer who are serious about honing their skills.</div>
            </div>
            <div className='section-container'>
                <div className='section'>
                    <div className='box'>
                        <div className='title'>Monthly Subscription</div>
                        <div className='subscription'>
                            <div className='price'>$29</div>
                            <div className='period'>per month</div>
                        </div>
                        <div className='description'>Full access for less than $1 a day</div>
                    </div>
                    <button className='signup'>Sign Up</button>
                </div>
                <div className='section'>
                    <div className='title'>Why Us</div>
                    <ul>
                        <li>Tutorials by industry experts</li>
                        <li>Peer & expert code review</li>
                        <li>Coding exercises</li>
                        <li>Access to our GitHub repos</li>
                        <li>Community forum</li>
                        <li>Flashcard decks</li>
                        <li>New videos every week</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default PriceGrid;
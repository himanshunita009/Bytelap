import Dropdown from '../Dropdown/Dropdown';
import './Home.css';
const Home = () => {
    const optionList = [
        'Option 1',
        'Option 2',
        'Option 3'
    ]
    return ( 
        <div className="home-main">
            <div className="search-bar">
                <input className='font-text' type="text" placeholder='  Search' id='search' name='search'/>
            </div>
            <div className="links-container">
                <Dropdown optionList={optionList}  />
                <span className='font-text'>Fliter-1</span>
                <span className='font-text'>Fliter-2</span>
                <span className='font-text'>Fliter-3</span>
                <Dropdown optionList={optionList}/>
            </div>
            <div className="box-container">
                <div>
                    <textarea rows={10} cols={50} />
                </div>
                <div>
                    <textarea rows={10} cols={50} />
                </div>
                <div>
                    <textarea rows={10} cols={50} />
                </div>
                
            </div>
        </div>
     );
}
 
export default Home;
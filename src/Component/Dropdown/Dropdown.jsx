import './Dropdown.css';
const Dropdown = ({optionList}) => {
    const handleClick = (e) => {
        e.target.parentNode.parentNode.classList.add('noscroll');
        e.target.parentNode.children[1].classList.toggle('show');
    }
    window.onclick = (event) => {
        if(!event.target.matches('.dropdownbtn')) {
            let x = document.querySelectorAll('.dropdown-content');
            for(let i = 0;i<x.length;i++){
                if(x[i].classList.contains('show')){
                    x[i].classList.remove('show');
                }
            }
        }
    }
    return ( 
        <div className="dropdown">
            <button  className="dropdownbtn font-text" onClick={(e) => handleClick(e)}>Dropdown</button>
            <div className="dropdown-content">
                {optionList.map((option) => (
                    <div className='dropdown-option font-text' key={option}>{option}</div>
                ))}
            </div>
        </div>
     );
}
 
export default Dropdown;

import '../styles/App.css'

const CellComponent = ({cell,selected,click}) => {

    return (
        <div 
            className={['cell', cell.color, selected?'selected':''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure && <div className='available' />}
            {cell.figure && cell.figure.logo && <img src={cell.figure.logo} alt='' />}
        </div>
    )
}

export default CellComponent
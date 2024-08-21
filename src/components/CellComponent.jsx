
import '../styles/App.css'

const CellComponent = ({cell}) => {
    console.log(cell.figure)

    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
        </div>
    )
}

export default CellComponent
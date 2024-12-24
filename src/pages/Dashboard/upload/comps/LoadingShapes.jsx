
import Styles from './loader.module.css'

const LoadingShapes = () => {
    return (
        <div className=''>
            <div className={Styles.loader}>
                <svg viewBox="0 0 80 80">
                    <circle r={32} cy={40} cx={40} />
                </svg>
            </div>
            <div className={`${Styles.loader} ${Styles.triangle}`}>
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72" />
                </svg>
            </div>
            <div className={Styles.loader}>
                <svg viewBox="0 0 80 80">
                    <rect height={64} width={64} y={8} x={8} />
                </svg>
            </div>
        </div>
    )
}

export default LoadingShapes

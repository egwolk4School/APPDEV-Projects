import { useLocation, NavLink, Route, Routes, Navigate  } from 'react-router-dom'
import { KeyboardDetails, KeyboardManuals, KeyboardReviews  } from './../../Components'
import './Product.css'
export const Product = () => {
    const location = useLocation()
    const keyboard = location.state.keyboard
  return (
    <>
        <div className="section">
            <div className="product-container">
                <div className="image-container">
                    <img src={keyboard.img} alt="" />
                </div>
                <div className="text-data-container">
                    <div className="mini-nav">
                        <ul>
                            <NavLink to={`/Products/${keyboard.id}/Details`} state={{keyboard}}><li>Details</li></NavLink>
                            <NavLink to={`/Products/${keyboard.id}/Manuals`} state={{keyboard}}><li>Manuals</li></NavLink>
                            <NavLink to={`/Products/${keyboard.id}/Reviews`} state={{keyboard}}><li>Reviews</li></NavLink>
                        </ul>
                    </div>
                    <div className="main-text-content">
                        <h2>{keyboard.model}</h2>
                        <Routes>
                            <Route index element={<Navigate to="Details" replace state={{ keyboard }} />} />
                            <Route path='Details' element={<KeyboardDetails/>}/>
                            <Route path='Manuals' element={<KeyboardManuals/>}/>
                            <Route path='Reviews' element={<KeyboardReviews/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

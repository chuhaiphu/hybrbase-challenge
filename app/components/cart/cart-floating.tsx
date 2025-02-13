import { api } from 'convex/_generated/api'
import { useQuery } from 'convex/react'
import { useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { setItemCount } from '~/store/slice/cartSlice'
import { type RootState } from '~/store/store'

export default function CartFloatingComponent() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = useSelector((state: RootState) => state.auth.user?._id) || ''
  const allCartItems = useQuery(api.cart.getCartItems, { userId })
  const itemCount = useSelector((state: RootState) => state.cart.itemCount)
  console.log(allCartItems);
  useEffect(() => {
    if (allCartItems) {
      dispatch(setItemCount(allCartItems.length))
    }
  }, [allCartItems, dispatch])
  
  const handleViewCart = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!userId) {
      toast.error('Please login first to view cart')
      return
    }
      navigate('/cart')
  }

  return (
    <div className="fixed top-24 right-48 flex items-center justify-center z-999">
      <div className="relative p-3 bg-white rounded-full shadow-sm ring-1 ring-gray-200 hover:ring-gray-300 transition-all">
        <FaShoppingCart onClick={handleViewCart} className="h-8 w-8 text-gray-900 hover:text-gray-500 transition-colors cursor-pointer" />
        {itemCount > 0 && (
          <div className="absolute -top-1 -right-1 bg-red-900 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-semibold">
            {itemCount}
          </div>
        )}
      </div>
    </div>
  )
}

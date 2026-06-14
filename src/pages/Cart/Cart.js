import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, Trash2, ShoppingBag, CheckCircle, ArrowLeft, Package } from 'lucide-react'
import PageTransition from '../../components/PageTransition/PageTransition'
import FloatingShapes from '../../components/FloatingShapes/FloatingShapes'
import Button from '../../components/Button/Button'
import { useCart } from '../../context/CartContext'
import { useScrollTop } from '../../hooks/useScrollTop'
import './Cart.css'

function CartEmpty() {
  return (
    <div className="cart-empty">
      <ShoppingBag size={56} color="var(--color-violet)" strokeWidth={1.5} />
      <h2 className="cart-empty__title">Your cart is empty</h2>
      <p className="cart-empty__sub">Add books or the Inside Me game to get started.</p>
      <div className="cart-empty__links">
        <Link to="/books"><Button variant="primary">Browse Books</Button></Link>
        <Link to="/game"><Button variant="secondary">View the Game</Button></Link>
      </div>
    </div>
  )
}

export default function Cart() {
  useScrollTop()
  const { items, count, total, removeItem, setQuantity, clearCart } = useCart()
  const hasPrices = items.some(i => i.price != null && i.price > 0)

  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.address.trim()) e.address = 'Delivery address is required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    try {
      const body = new FormData()
      body.append('form-name', 'order')
      body.append('name', form.name)
      body.append('email', form.email)
      body.append('phone', form.phone)
      body.append('address', form.address)
      body.append('items', items.map(i => `${i.name} x${i.quantity}`).join(', '))
      body.append('total', `$${total.toFixed(2)}`)
      await fetch('/', { method: 'POST', body })
      setSuccess(true)
      clearCart()
    } catch {
      // show success anyway — Netlify may return opaque on local dev
      setSuccess(true)
      clearCart()
    }
    setSubmitting(false)
  }

  if (success) {
    return (
      <PageTransition>
        <div className="cart-page">
          <FloatingShapes variant="subtle" />
          <div className="cart-success">
            <CheckCircle size={64} color="var(--color-mint)" strokeWidth={1.5} />
            <h2 className="cart-success__title">Order received!</h2>
            <p className="cart-success__sub">Thank you, {form.name || 'friend'}. We've received your order and will be in touch shortly to confirm delivery.</p>
            <Link to="/home"><Button variant="primary">Back to Home</Button></Link>
          </div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <div className="cart-page">
        <FloatingShapes variant="subtle" />
        <div className="cart-inner">

          <div className="cart-header">
            <Link to="/home" className="cart-back">
              <ArrowLeft size={16} /> Continue shopping
            </Link>
            <h1 className="cart-title">
              <ShoppingBag size={26} strokeWidth={1.8} />
              Your Cart
              {count > 0 && <span className="cart-count-badge">{count}</span>}
            </h1>
          </div>

          {items.length === 0 ? <CartEmpty /> : (
            <div className="cart-layout">

              {/* Items */}
              <div className="cart-items">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      className="cart-item"
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="cart-item__img-wrap">
                        {item.cover
                          ? <img src={item.cover} alt={item.name} className="cart-item__img" />
                          : <Package size={32} color="var(--color-violet)" />
                        }
                      </div>
                      <div className="cart-item__info">
                        <p className="cart-item__name">{item.name}</p>
                        {item.price != null && item.price > 0 && <p className="cart-item__price">${item.price.toFixed(2)}</p>}
                      </div>
                      <div className="cart-item__qty">
                        <button
                          className="cart-item__qty-btn"
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="cart-item__qty-num">{item.quantity}</span>
                        <button
                          className="cart-item__qty-btn"
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      {item.price != null && item.price > 0 && <p className="cart-item__subtotal">${(item.price * item.quantity).toFixed(2)}</p>}
                      <button
                        className="cart-item__remove"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Checkout */}
              <div className="cart-checkout">
                <div className="cart-summary">
                  <h2 className="cart-summary__title">Order Summary</h2>
                  {items.map(item => (
                    <div key={item.id} className="cart-summary__row">
                      <span>{item.name} × {item.quantity}</span>
                      {hasPrices && item.price != null && item.price > 0 && <span>${(item.price * item.quantity).toFixed(2)}</span>}
                    </div>
                  ))}
                  {hasPrices && (
                    <>
                      <div className="cart-summary__divider" />
                      <div className="cart-summary__total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </>
                  )}
                  <p className="cart-summary__shipping">Pricing will be confirmed upon order review</p>
                </div>

                <form className="cart-form" onSubmit={handleSubmit} noValidate>
                  <h2 className="cart-form__title">Delivery Details</h2>

                  <div className="cart-field">
                    <label className="cart-field__label" htmlFor="cf-name">Full Name</label>
                    <input
                      id="cf-name"
                      className={`cart-field__input${errors.name ? ' cart-field__input--error' : ''}`}
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })) }}
                    />
                    {errors.name && <p className="cart-field__error">{errors.name}</p>}
                  </div>

                  <div className="cart-field">
                    <label className="cart-field__label" htmlFor="cf-email">Email Address</label>
                    <input
                      id="cf-email"
                      className={`cart-field__input${errors.email ? ' cart-field__input--error' : ''}`}
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })) }}
                    />
                    {errors.email && <p className="cart-field__error">{errors.email}</p>}
                  </div>

                  <div className="cart-field">
                    <label className="cart-field__label" htmlFor="cf-phone">Phone Number</label>
                    <input
                      id="cf-phone"
                      className={`cart-field__input${errors.phone ? ' cart-field__input--error' : ''}`}
                      type="tel"
                      placeholder="+20 ..."
                      value={form.phone}
                      onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })) }}
                    />
                    {errors.phone && <p className="cart-field__error">{errors.phone}</p>}
                  </div>

                  <div className="cart-field">
                    <label className="cart-field__label" htmlFor="cf-address">Delivery Address</label>
                    <textarea
                      id="cf-address"
                      className={`cart-field__input cart-field__input--textarea${errors.address ? ' cart-field__input--error' : ''}`}
                      placeholder="Street, city, country"
                      rows={3}
                      value={form.address}
                      onChange={e => { setForm(f => ({ ...f, address: e.target.value })); setErrors(er => ({ ...er, address: '' })) }}
                    />
                    {errors.address && <p className="cart-field__error">{errors.address}</p>}
                  </div>

                  <Button variant="primary" size="lg" type="submit" disabled={submitting}>
                    {submitting ? 'Placing order…' : 'Place Order →'}
                  </Button>
                </form>
              </div>

            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

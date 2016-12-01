import {Map} from 'immutable'

// Helpers
export const getModals = ({ui}, modalIds) => {
  const modals = {}
  if (modalIds.length >= 1) {
    modalIds.forEach(modalId => {
      modals[modalId] = ui.getIn(['modals', modalId], false)
    })
  }
  return modals
}

// Modals actions & constants
export const MODAL_OPEN = 'MODAL_OPEN'
export const modalOpen = modalId => ({
  type: MODAL_OPEN,
  modalId
})

export const MODAL_CLOSE = 'MODAL_CLOSE'
export const modalClose = modalId => ({
  type: MODAL_CLOSE,
  modalId
})

// Reducer
export default (state = Map(), {type, modalId}) => {
  switch (type) {
    case MODAL_OPEN:
      return state.setIn(['modals', modalId], true)
    case MODAL_CLOSE:
      return state.setIn(['modals', modalId], false)
    default:
      return state
  }
}

import React from 'react'
import { mount } from 'enzyme'
import ToDo from './ToDo'

const setup = () => mount(<ToDo />)

describe('<ToDo/>', () => {
  describe('The default UI', () => {
    it('Renders two default todo items', () => {
      const app = setup()
      expect(app.find('.ToDoItem').length).toBe(2)
    })

    it('Has an input field', () => {
      const app = setup()
      expect(app.find('.ToDoInput').length).toEqual(1)
    })

    it('Has an add button', () => {
      const app = setup()
      expect(app.find('.ToDo-Add').length).toEqual(1)
    })
  })

  describe('Adding items', () => {
    window.alert = jest.fn()
    it('When the add button is pressed, if the input field is empty, prevent item from being added', () => {
      const app = setup()
      app.find('.ToDo-Add').simulate('click')
      expect(app.find('.ToDoItem').length).toBe(2)
    })

    it('When the add button is pressed, if the input field is empty, prevent item from being added', () => {
      const app = setup()
      app.find('.ToDo-Add').simulate('click')
      expect(window.alert).toHaveBeenCalled()
    })

    it('When the add button is pressed, if the input field has text, it creates a new todo item', () => {
      const app = setup()
      const event = { target: { value: 'Create more tests' } }
      app.find('input').simulate('change', event)
      app.find('.ToDo-Add').simulate('click')
      expect(app.find('.ToDoItem-Text').at(2).text()).toEqual(
        'Create more tests',
      )
    })
  })

  describe('Deleting items', () => {
    it('When the delete button is pressed for the first todo item, it removes the entire item', () => {
      const app = setup()
      app.find('.ToDoItem-Delete').first().simulate('click')
      expect(app.find('.ToDoItem').length).toBe(1)
    })
  })
})

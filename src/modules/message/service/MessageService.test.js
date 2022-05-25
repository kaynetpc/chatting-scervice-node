import MessageService from './MessageService';

const conversationId = '628d66d874c8d23ffdf6aa31'
test('It should Retrieve Messages',
() => {
    const res = await MessageService.getMessages(conversationId);
    console.log(res)
  expect(res.error).toBe(false)
})



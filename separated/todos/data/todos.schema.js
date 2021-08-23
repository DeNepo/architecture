export const todosSchema = {
  title: 'todos',
  description: 'a collection of things to do',
  type: 'object',
  required: ['title', 'nextId', 'items'],

  properties: {
    title: {
      type: 'string',
      description: 'the title for this list of things',
    },
    nextId: {
      type: 'number',
      description: 'the next ID to use when creating a new todo',
    },
    items: {
      type: 'array',
      items: {
        $ref: './item.schema.js',
      },
    },
    query: {
      type: 'string',
      description: 'the value to search for in the tasks',
    },
    filters: {
      type: 'object',
      description:
        'an object describing which status of todo should be displayed',
      properties: {
        done: {
          type: 'boolean',
          description: 'whether or not to display completed todos',
        },
        notDone: {
          type: 'boolean',
          description: 'whether or not to display incomplete todos',
        },
      },
    },
  },
};

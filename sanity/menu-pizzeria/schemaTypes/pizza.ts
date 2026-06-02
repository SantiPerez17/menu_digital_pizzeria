import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pizza',
  title: 'Item del menú',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredientes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'available',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
      description: 'Desactivar para ocultar del menú sin eliminar',
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Número para ordenar dentro de la categoría',
    }),
  ],
})

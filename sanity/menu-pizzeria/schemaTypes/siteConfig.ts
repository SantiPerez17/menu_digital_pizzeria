import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteConfig',
  title: 'Configuración del sitio',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'restaurantName',
      title: 'Nombre del restaurante',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Número de teléfono',
      type: 'string',
      description: 'Formato: +54XXXXXXXXXX (para el botón de llamada)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
    }),
    defineField({
      name: 'openingHours',
      title: 'Horarios',
      type: 'string',
      description: 'Ej: Lun–Vie 12:00–23:00 / Sáb–Dom 12:00–00:00',
    }),
  ],
})

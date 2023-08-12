# Компонент ../../@atoms/image/image.twig

## Пример кода

```twig
{% include '../../@atoms/image/image.twig' with {
    image: {
      name: "test-img",
      class: "test-class",
      alt: "test-alt",
      sizes: {
        width: 500,
        height: 500
      },
      lazy: false,
      picture: {
        class: ""
      },
      adaptive: {
        media: {
          value: 600
        }
      },
    }
} %}
```

## Пропсы

`name` - имя картинки

`class` - дополнительные классы

`sizes` - размеры, объект с двумя свойствами width и height

`alt` - альтернативный текст картинки

`lazy` - картинка с lazyload, по дефолту true, т.е. с lazyload

`attrs` - строка с атрибутами

`picture` - объект, который содержит свойство class для тега picture

`adaptive` - адаптивные изображения (max-width, value - значение viewport)

## Порядок пропсов

- img-свойства
- picture-свойства
- adaptive

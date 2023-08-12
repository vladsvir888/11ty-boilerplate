# Компонент ../../@atoms/icon/icon.twig (спрайты)

## Пример кода

```twig
{% include '../../@atoms/icon/icon.twig' with {
    icon: {
      name: "sprite-mono.svg#test-icon",
      class: "test-icon",
      sizes: {
        width: 33,
        height: 33
      },
      attrs: ""
    }
} %}
```

## Пропсы

`name` - имя иконки

`class` - дополнительные классы

`sizes` - размеры, объект с двумя свойствами width и height

`attrs` - строка с атрибутами

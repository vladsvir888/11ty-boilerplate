# Компонент ../../@atoms/button/button.twig

## Пример кода

```twig
{% include '../../@atoms/button/button.twig' with {
    button: {
      href: "#",
      class: "test-btn",
      attrs: "",
      text: {
        class: "test-class-text",
        text: "test button text"
      },
      icon: {

      },
    }
} %}
```

## Пропсы

`href` - если указан, то кнопка-ссылка

`class` - дополнительные классы кнопки

`id` - id кнопки

`attrs` - атрибуты кнопки

`text.class` - дополнительные классы текста

`text.text` - текст текста

`icon` - кнопка с иконкой (спрайты) слева

`right_icon` - кнопка с иконкой (спрайты) справа

`icons` - кнопка с иконками (массив иконок, спрайты)

`svg_icon` - иконка через код

`svg_icon_right` - иконка через код справа

## Порядок пропсов

- href
- id, class, attrs
- text
- icon/right_icon
- svg_icon/svg_icon_right

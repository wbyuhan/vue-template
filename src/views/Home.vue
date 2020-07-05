<template>
  <div class="home">
    <div id="wrapper" />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const graph = new this.$joint.dia.Graph()
      new this.$joint.dia.Paper({
        el: document.getElementById('wrapper'),
        width: 900,
        height: 700,
        model: graph,
        gridSize: 1,
        drawGrid: true,
        background: {
          color: 'rgba(0, 255, 0, 0.3)'
        }
      })

      const rect = new this.$joint.shapes.basic.Rect({
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: {
          rect: {
            fill: 'blue'
          },
          text: {
            text: 'first Box',
            fill: 'white'
          }
        }
      })
      console.log('%c 🍮 rect: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', rect)
      rect.addTo(graph)
      var rect2 = rect.clone()
      rect2.translate(300, 0)
      rect2.attr('label/text', 'World!')
      rect2.addTo(graph)

      var link = new this.$joint.shapes.standard.Link({
        source: { id: rect.id },
        target: { id: rect2.id }
      })
      link.addTo(graph)
    }
  }
}
</script>

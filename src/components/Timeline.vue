<template>
  <Timeline :timeline-items="timelineItems" :message-when-no-items="messageWhenNoItems"/>
</template>

<script>
import Timeline from '../component/Timeline'
export default {
  components: {
    Timeline
  },
  name: "timeline",
  data() {
    return {
      messageWhenNoItems: 'There arent items',
      timelineItems: [
        {
          year: {
            from: '2017',
            to: '2018'
          },
          items: [
            {
              nameMonth: 'February',
              title: 'Five',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
            },
            {
              nameMonth: 'January',
              title: 'Five',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
            }
          ]
        },
      ]
    }
  }
  
};
</script>

<style scope>

</style>


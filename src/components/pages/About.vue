<template>
  <main>
    <div class="container mb-96 mt-96">
      <div class="row">
        <div class="col-sm-7 mr-auto">
          <h2 class="h1 mb-32">I’m Jevgenijs,
            <br>nice to meet you.
          </h2>
          <p
            class="subtitle-large text-dark mb-48"
          >I’m a Full stack web developer and UI designer with over 10 years experience crafting digital products. Currently working at Sonarworks.</p>
        </div>
        <div class="col-sm-4">
          <img width="100%" src="@/assets/img/jevgenijs_zaremba.png" alt="Jevgēnijs Zaremba">
        </div>
      </div>
    </div>
    <hr>
    <div class="container my-48 my-md-96">
      <div class="row mb-64">
        <div class="col-12 col-sm-4 mr-auto">
          <h3>How I got started in user research</h3>
        </div>
        <div class="col-12 col-sm-7">
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
           <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
        </div>
      </div>

      <div class="row mb-64">
        <div class="col-12 col-sm-4 mr-auto">
          <h3>What I've been working on</h3>
        </div>
        <div class="col-12 col-sm-7">
           <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-4 mr-auto">
          <h3>What I'm curious about</h3>
        </div>
        <div class="col-12 col-sm-7">
           <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
        </div>
      </div>
    </div>

    <hr>
    <div class="container my-48 my-md-96">
      <div class="row">
        <div class="col-12 mb-48">
          <h2>What I care about</h2>
        </div>
        <div class="col-lg-4">
          <Icon class="mb-16" name="quality"></Icon>
          <h3>Quality</h3>
          <p>I always strive to deliver beutiful and minimaltic design. And I optimze and compress the code for the blazing fast loading times</p>
        </div>
        <div class="col-lg-4">
          <Icon class="mb-16"  name="precission"></Icon>
          <h3>Precission</h3>
          <p>No matter if it is a meeting or a project deadline I guarantee that there is 99,9% of chance that I will be on time as promised</p>
        </div>
        <div class="col-lg-4">
          <Icon class="mb-16"  name="inovation"></Icon>
          <h3>Inovation</h3>
          <p>As I tend to folow latest trends and constanly learn something new that’s why my clients always receive most inovative solutions on the market</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="container my-48 my-md-96">
      <div class="row">
        <div class="col">
          <h2>My experience and
            <br>tools I love to work with
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <h4>Design</h4>
          <ul>
            <li>Photoshop</li>
            <li>Sketch</li>
            <li>Figma</li>
            <li>Invision</li>
          </ul>
        </div>
      </div>
    </div>
    <ContactForm></ContactForm>
  </main>
</template>

<script>
import ContactForm from '@/components/templates/ContactForm'
import Icon from '@/components/templates/Icon'
export default {
  components: {
    ContactForm,
    Icon
  }
}
</script>

import { defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'
import TemplateOne from '@/components/cvTemplates/TemplateOne/TemplateOne.vue'
import TemplateTwo from '@/components/cvTemplates/TemplateTwo/TemplateTwo.vue'

export const useCVStore = defineStore('cv', () => {
  const cv = reactive(
    JSON.parse(localStorage.getItem('cv')) || {
      template: 'TemplateOne',
      title: 'Untitled_CV',
      styles: {
        accentColor: '#526a89',
        contrastColor: '#fff',
      },
      sections: {
        summary: {
          title: 'Profile',
          show: true,
        },
        contact: {
          title: 'Contact',
          show: true,
        },
        skills: {
          title: 'Skills',
          show: true,
        },
        language: {
          title: 'Languages',
          show: false,
        },
        education: {
          title: 'Education',
          show: true,
        },
        experience: {
          title: 'Work experience',
          show: true,
        },
      },
      photo: './images/photo.jpg',
      name: 'Your Name',
      jobTitle: 'Job Title',
      contact: {
        location: 'City, Country',
        phone: '+380 XX XXX XXXX',
        email: 'email@example.com',
        linkedin: '',
        github: 'username',
        links: [],
      },
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      skills: [],
      language: [],
      experience: [
        {
          id: 1,
          company: 'Company Name',
          startDate: 'Start Date',
          endDate: 'End Date',
          position: 'Job Position',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.',
        }
      ],
      education: [
        {
          id: 1,
          university: 'University Name',
          degree: 'Degree Name',
          date: 'Start Date-End Date',
        },
      ],
    },
  )

  const cvRef = ref(null)

  const setCVRef = (refValue) => {
    cvRef.value = refValue
  }

  const templates = {
    TemplateOne,
    TemplateTwo,
  }

  const currentTemplate = computed(() => templates[cv.template])

  const setTemplate = (template) => {
    cv.template = template
  }

  const templateKeys = computed(() => Object.keys(templates))

  return { cv, cvRef, setCVRef, templateKeys, currentTemplate, setTemplate }
})

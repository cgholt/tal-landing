# Design

## Colors

| Name | Hex |
|---|---|
| old rose | #d46d7a |
| vinaceous cinnamon | #eea78c |
| glaucaus green | #b4cdc2 |
| sea green | #00b49b |
| warm ground | #fdfbf7 |

## Text styles

| Name | Font | Size | Weight | Line height | Letter spacing | Transform |
|---|---|---|---|---|---|---|
| H1 | Quattrocento | 64px | 600 | 1 | -1.7px | uppercase |
| H2 | Fanwood Text | 48px | 400 | 1 | 0px | none |

## Layout

- **Therapy Landing Page** (frame) — 1440px × 2796px · flex column, align center · fill #FDFBF7
  - **Navbar** (frame) — fill × 76px · flex row, gap 16px, justify space-between · padding 16px 64px 0px 64px · fill `old rose` (#d46d7a) · radius 4px 0px 0px 0px · border 1px solid `warm ground` (#fdfbf7) (outside)
    - **Name** (text) — 48% × fill · text Karla 32px/1.7 600 · color #FDFBF7 · align right
      > Tal Nesichi,  LCSW-S
    - **Contact** (frame) — 120px × 48px · flex column, gap 16px, align center, justify center · fill `warm ground` (#fdfbf7) · radius 6px
      - **Text** (text) — fill × fill · text Karla 24px/1.9 400 · color #82241f · align center
        > Contact
  - **Hero** (frame) — 100% × 22% · flex row, justify center · padding 0px 64px 0px 64px · fill image data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20615%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22g%22%20cx%3D%220.5%22%20cy%3D%220.5%22%20r%3D%220.5%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23FDFBF7%22%20stop-opacity%3D%220.11%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23FDFBF7%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%223%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22170%22%20r%3D%22540%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cg%20fill%3D%22%23FDFBF7%22%20fill-opacity%3D%220.10%22%3E%3Ccircle%20cx%3D%221075%22%20cy%3D%22288%22%20r%3D%22300%22%2F%3E%3Ccircle%20cx%3D%221330%22%20cy%3D%22342%22%20r%3D%22300%22%2F%3E%3C%2Fg%3E%3Crect%20width%3D%221440%22%20height%3D%22615%22%20filter%3D%22url%28%23n%29%22%20opacity%3D%220.035%22%2F%3E%3C%2Fsvg%3E (cover) over `old rose` (#d46d7a)
    - **Hero content** (frame) — 95% × 100% · flex column, gap 36px, justify center
      - **Hero heading** (text) — 1000% × hug · text Quattrocento 64px/1.1 600 · color `warm ground` (#fdfbf7)
        > Reconnect with the people you love.
        > Reconnect with yourself.
        > Reconnect Therapy
      - **Hero subheading** (text) — 48% × hug · text Fanwood Text 33px/1.5 400 · color `warm ground` (#fdfbf7)
        > Relationships, sexuality, and trauma therapy grounded in warm, evidence-based, compassionate care.
      - **Hero CTA** (frame) — 230px × 52px · flex row, align center, justify center · fill `warm ground` (#fdfbf7) · radius 6px
        - **Hero CTA label** (text) — 200px × 22px · text Karla 19px/1.2 700 · color #82241f · align center
          > Book a consultation
  - **About** (frame) — 1440px × 599px · flex row, align center, justify center · fill `warm ground` (#fdfbf7)
    - **About content** (frame) — 90% × fill · flex row, gap 72px · padding 48px 0px 0px 0px
      - **Portrait** (image) — 420px × 480px · radius 12px · src /api/images/0657c358e3fd9e7f6b58a770609497f494410380c105ee7eb2bd301631efd5ca.jpg (cover)
      - **About text** (frame) — 715px × fill · flex column, gap 31px
        - **About heading** (text) — 560px × hug · text Newsreader 44px/1.15 400 · color #82241f
          > Hi, I'm Tal Nesichi
        - **About paragraph 1** (text) — fill × 108px · text Karla 17px/1.7 400 · color #6B625C
          > Relationships can be hard. Sometimes we feel disconnected—from ourselves, our partners, or the life we want to be living. Maybe your relationship feels more like roommates than partners. Maybe sex has become a source of tension instead of connection. Or perhaps experiences from the past continue to shape the present.
        - **About paragraph 2** (text) — fill × 108px · text Karla 17px/1.7 400 · color #6B625C
          > I'm a Licensed Clinical Social Worker and Certified Sex Therapist specializing in relationships, intimacy, sexuality, and trauma. Come as you are. Together, we'll make sense of what's happening and move toward the kind of life and relationships you want. My hope is that through this process, you'll experience deeper connection, vitality, and fulfillment.
        - **About paragraph 3** (text) — fill × hug · text Karla 17px/1.7 400 · color #6B625C
          > As a Certified Sex Therapist with advanced training in relationships and trauma, I integrate evidence-based therapies, including Emotionally Focused Therapy (EFT), Acceptance and Commitment Therapy (ACT), Cognitive Behavioral Therapy (CBT), and specialized trauma treatments. I work with individuals and couples of all identities and relationship structures.
  - **Services** (frame) — 1440px × 700px · flex row, align center, justify center · fill `glaucaus green` (#b4cdc2)
    - **Services content** (frame) — 1160px × 540px · flex column, align center
      - **Section label** (text) — 300px × 20px · text Karla 12px/1.6 700 · color #82241f · align center
        > SERVICES
      - **Spacer** (rect) — 1px × 16px
      - **Services heading** (text) — 800px × 54px · text Newsreader 44px/1.15 400 · color #82241f · align center
        > Ways we can work together
      - **Spacer** (rect) — 1px × 48px
      - **Service cards** (frame) — 1160px × 320px · flex row, gap 28px
        - **Individual therapy Card** (component) — 368px × 320px · flex column · padding 36px 32px 36px 32px · fill #FFFFFF · radius 12px · border 1px solid #D6E7EF (inside)
          - **Title** (text) — 304px × 30px · text Karla 21px/1.3 700 · color #2A2724
            > Individual therapy
          - **Spacer** (rect) — 1px × 14px
          - **Blurb** (text) — 304px × 112px · text Karla 16px/1.65 400 · color #6B625C
            > Weekly 50-minute sessions for anxiety, grief, life transitions, and the burnout that doesn't look like burnout from the outside.
          - **Spacer** (rect) — 1px × 20px
          - **Divider** (rect) — 304px × 1px · fill #E8E1D9
          - **Spacer** (rect) — 1px × 18px
          - **Meta** (text) — 304px × 22px · text Karla 14px/1.6 700 · color #82241f
            > 50 min · $165
        - **Couples work Card** (component) — 368px × 320px · flex column · padding 36px 32px 36px 32px · fill #FFFFFF · radius 12px · border 1px solid #D6E7EF (inside)
          - **Title** (text) — 304px × 30px · text Karla 21px/1.3 700 · color #2A2724
            > Couples work
          - **Spacer** (rect) — 1px × 14px
          - **Blurb** (text) — 304px × 112px · text Karla 16px/1.65 400 · color #6B625C
            > For partners stuck in the same argument in different clothes. We slow it down enough to hear what is actually being asked for.
          - **Spacer** (rect) — 1px × 20px
          - **Divider** (rect) — 304px × 1px · fill #E8E1D9
          - **Spacer** (rect) — 1px × 18px
          - **Meta** (text) — 304px × 22px · text Karla 14px/1.6 700 · color #82241f
            > 75 min · $220
        - **EMDR & trauma Card** (component) — 368px × 320px · flex column · padding 36px 32px 36px 32px · fill #FFFFFF · radius 12px · border 1px solid #D6E7EF (inside)
          - **Title** (text) — 304px × 30px · text Karla 21px/1.3 700 · color #2A2724
            > EMDR & trauma
          - **Spacer** (rect) — 1px × 14px
          - **Blurb** (text) — 304px × 112px · text Karla 16px/1.65 400 · color #6B625C
            > Structured, evidence-based processing for single-incident and developmental trauma. Paced carefully, always at your consent.
          - **Spacer** (rect) — 1px × 20px
          - **Divider** (rect) — 304px × 1px · fill #E8E1D9
          - **Spacer** (rect) — 1px × 18px
          - **Meta** (text) — 304px × 22px · text Karla 14px/1.6 700 · color #82241f
            > 60 min · $185
  - **Contact** (frame) — 1440px × 720px · flex row, align center, justify center · fill #FDFBF7
    - **Contact content** (frame) — 640px × 626px · flex column, align center
      - **Section label** (text) — 300px × 20px · text Karla 12px/1.6 700 · color #6B625C · align center
        > CONTACT
      - **Spacer** (rect) — 1px × 16px
      - **Contact heading** (text) — 640px × 54px · text Newsreader 44px/1.15 400 · color #82241f · align center
        > Reach out
      - **Spacer** (rect) — 1px × 14px
      - **Contact sub** (text) — 600px × 52px · text Karla 16px/1.6 400 · color #6B625C · align center
        > A free 15-minute call to see whether we're a fit. I reply to everything within two business days.
      - **Spacer** (rect) — 1px × 40px
      - **Contact form** (frame) — 640px × 430px · flex column, gap 20px
        - **Name field** (frame) — 640px × 84px · flex column, gap 8px
          - **Label** (text) — 300px × 20px · text Karla 13px/1.6 700 · color #2A2724
            > Name
          - **Input** (frame) — 640px × 54px · flex row, align center · padding 0px 0px 0px 16px · fill #FFFFFF · radius 6px · border 1px solid #E8E1D9 (inside)
            - **Placeholder** (text) — 400px × 22px · text Karla 15px/1.6 400 · color #9C948C
              > Your name
        - **Email field** (frame) — 640px × 84px · flex column, gap 8px
          - **Label** (text) — 300px × 20px · text Karla 13px/1.6 700 · color #2A2724
            > Email
          - **Input** (frame) — 640px × 54px · flex row, align center · padding 0px 0px 0px 16px · fill #FFFFFF · radius 6px · border 1px solid #E8E1D9 (inside)
            - **Placeholder** (text) — 400px × 22px · text Karla 15px/1.6 400 · color #9C948C
              > you@example.com
        - **What brings you here? field** (frame) — 640px × 150px · flex column, gap 8px
          - **Label** (text) — 300px × 20px · text Karla 13px/1.6 700 · color #2A2724
            > What brings you here?
          - **Input** (frame) — 640px × 120px · flex row, align center · padding 14px 0px 0px 16px · fill #FFFFFF · radius 6px · border 1px solid #E8E1D9 (inside)
            - **Placeholder** (text) — 400px × 22px · text Karla 15px/1.6 400 · color #9C948C
              > A sentence or two is plenty — no detail required.
        - **Submit** (frame) — 640px × 52px · flex row, align center, justify center · fill #82241f · radius 6px
          - **Submit label** (text) — 240px × 22px · text Karla 15px/1.6 700 · color #FFFFFF · align center
            > Send message
  - **Footer** (frame) — 1440px × 96px · flex row, align center, justify center · fill #FDFBF7 · border 1px solid #E8E1D9 (inside)
    - **Footer text** (text) — 900px × 22px · text Karla 14px/1.6 400 · color #6B625C · align center
      > Maren Ellison, LCSW · 2400 E Cesar Chavez St, Austin TX · In-person and telehealth across Texas

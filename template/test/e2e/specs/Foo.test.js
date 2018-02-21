describe('Index page', () => {
  let page
  beforeAll(async () => {
    page = await browser.newPage()
    await page.goto(BASE_URL)
  })
  afterAll(async () => {
    await page.close()
  })

  it('renders index page', async () => {
    const el = await page.$('.index-page')
    expect(el).toBeTruthy()
  })
})
export const AppRoutes = {
  home: '/',
  
  login: 'login',

  details: 'project/:id',
  getDetailsRoute(id: string) {
    return this.details.replace(':id', id)
  },
  
}
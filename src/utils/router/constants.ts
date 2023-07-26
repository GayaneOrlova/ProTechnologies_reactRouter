export const AppRoutes = {
  home: '/',

  details: 'project/:id',
  getDetailsRoute(id: string) {
    return this.details.replace(':id', id)
  },
  
  

}
import {
  HttpClient,
  HttpHeaders,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
// import { ProJsToAdvplService } from '@framesp/protheus-lib-thf';

export const protheusAuthorizationInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  // const proJsToAdvplService: ProJsToAdvplService = inject(ProJsToAdvplService);
  const token: string =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3NDk4NjMzODEsInVzZXJpZCI6IjAwMDAwMCIsImV4cCI6MTc0OTg2Njk4MSwiZW52SWQiOiJQMTJfTE9DQUwifQ.jEMxOfUGnTLfQeE7O4vXxYr5HiW96HIzAInVsykzENKYK7gcGJnAV3e_IjRd-RMqFTfinHaA06QecjRJtb6g4TyhgZwdzhJLOH4Rcu1GTQjdmtFQBKJAlF2Bx3O7lXpCT4Mh996HZedKNPwS3DozS4Tnf52HdgFlOH1k8a5IlP8nEVLhri7bbS_O_vf1nqGUH8a-owLspbD4r1Btop7ZnRdykdwD5dE-Ak_HN5eiuJDI3Cmdk8eq1HB3cnfawR6LSsM4k2LYlhojoaxBHa9GSL5wCheyvZNgJG6JGNB2QgGCkZXIE9WifxaPBYb5V7EjBVweSn6GUOtfU0nw_m7Qcw';
  let newReq = req;

  // if (proJsToAdvplService.protheusConnected()) {
  //   return next(req);
  // }

  newReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  return next(newReq);
};

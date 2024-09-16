import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { Recruiter } from 'src/app/models/recruiter';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit{

  job: Job = {} as Job;
  recruteur: Recruiter = {} as Recruiter;

  requirements =[
     {id:1, name:'ReactJS'},
     {id:2, name:'Angular'},
     {id:3, name:'Spring Boot'},
     {id:4, name:'JavaScript'},
     {id:5, name:'Python'},
     {id:6, name: 'HTML'},
     {id:7, name: 'CSS'},
     {id:8, name: 'Typescript'},
     {id:9, name: 'Docker'},
     {id:10, name: 'MySQL'},
     {id:11, name: 'Kubernetes'},
     {id:12, name: 'Java'},
     {id:13, name: 'Git'},
     {id:14, name: 'Bootstrap'}
     
  ];

  constructor(private jobService: JobService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    const recruiterId = this.authService.getUserId(); // Récupérer l'ID du recruteur depuis le service AuthService
    if (recruiterId) {
      this.recruteur.id = parseInt(recruiterId, 10); // Convertir l'ID en nombre
    } else {
      console.error('Recruiter ID is not available');
      // Gérer l'absence d'ID de recruteur, par exemple, rediriger vers la page de connexion
    }
  }

  saveJob(){
    this.job.recruteur = this.recruteur;
    this.jobService.createJob(this.job).subscribe( data =>{
      console.log('Job created successfully:', data);
      this.goToJobList();
    },
    error => console.error('Error:', error));
  }

  goToJobList(){
    this.router.navigate(['/listjob']);
  }
  
  onSubmit(){
    console.log(this.job);
    this.saveJob();
  }

  itemSelected(e:any){
    console.log(e);
  }

}

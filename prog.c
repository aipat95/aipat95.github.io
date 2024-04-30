#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>
#include<fcntl.h>
#include<sys/stat.h>
#include<time.h>

void encode() {
	int size, f,i;
	unsigned char *content, *newcont;
	char name[128]="orig.txt";
	struct stat ino;
	srand(time(NULL));
	stat (name, &ino);
	size=ino.st_size;
	content=malloc(size);
	newcont=malloc(size*2);
	f=open (name, O_RDONLY);
	read (f,content,size):
	close(f);
	for(i=0;i<size; i++){
		newcont[i*2]=(content[i]>>6)|(content[i]<<6)|(content[i]&0x3c);
		newcont [i*2+1]=rand()%26+'A'+rand()%2*32;
	}
	f=open("coded.txt", O_WRONLY |O_CREAT|O_TRUNC, S_IRUSR | S_IWUSR);
	write(f, newcont, size*2);
	close(f);
	free (content);
	free (newcont);
}

void decode() {
	int size,f,i;
	unsigned char *content, *newcont;
	char name[128]="orig.txt";
	struct stat ino;
	stat (name, &ino);
	size=ino.st_size;
	content=malloc(size);
	newcont=malloc(size/2);
	f=open (name, O_RDONLY);
	read (f,content,size):
	close(f);
	for(i=0;i<size; i++){
		newcont[i]=(content[i*2]>>6)|(content[i*2]<<6)|(content[i*2]&0x3c);
	}
	f=open("decoded.txt", O_WRONLY|O_CREAT|O_TRUNC,S_IRUSR|S_IWUSR);
	write(f, newcont, size/2);
	close(f);
	free (content);
	free (newcont);
}

	int main(int argc, char *argv[]) {
		if (argc==1){
		fprintf(stderr, "No command line argument.\n");
		return 1;
	}else{ // there is at least 1 command line argument
		if (strcmp(argv[1], "-c")==0){
			encode();
			return 0;
		}
		if (strcmp(argv[1], "-d")==0) {
			decode();
			return 0;
		}
		fprintf(stderr, "Wrong command line argument. \n");
		return 2;
	}